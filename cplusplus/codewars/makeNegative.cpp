int makeNegative(int num)
{
  if (num <= 0){
    return num;
  } else {
    return num - num * 2;
  }
}