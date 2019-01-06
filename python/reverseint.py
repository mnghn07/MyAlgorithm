import math

def reverseint(n):
    return int(math.copysign(int(str(n)[::-1].strip("-")),n))

print(reverseint(-15))
print(reverseint(15))