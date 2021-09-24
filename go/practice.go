package main

import (
	"fmt"
)

func main() {
	// ReverseWord("Hello")
	// ReverseWordTwo("Hello")
	moduloPractice(90, 2)
}

func ReverseWord(word string) string {
	wordSlice := []rune(word)
	for i, j := 0, len(wordSlice)-1; i <= j; i, j = i+1, j-1 {
		wordSlice[i], wordSlice[j] = wordSlice[j], wordSlice[i]
	}
	fmt.Println(string(wordSlice))
	return string(wordSlice)
}

func ReverseWordTwo(word string) (reversedWord string) {
	for _, char := range word {
		reversedWord = string(char) + reversedWord
	}
	fmt.Println(reversedWord)
	return
}

func moduloPractice(a, b int) int {
	modulus := a % b
	fmt.Println(modulus)
	return modulus
}
