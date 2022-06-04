
import sys


try:
    x = int(input("nhap vao X de ban ơi "))
    y = int(input("nhap vao Y de ban ơi "))
except ValueError:
    print("Ngu qua nhập sai rồi, nhập số cơ")
    sys.exit(1)
try:
    hieu = x / y
except ZeroDivisionError:
    print("Khong thể  chia cho 0")
    sys.exit(1)
print(f"{x} chia {y} bang {hieu}")