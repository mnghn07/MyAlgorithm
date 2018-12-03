#fibonacci algorithms, each number is sum of two precending numbers
def fibonacci(n):
    a,b = 0,1
    for i in range(n):
        a,b = b, a+b
    return a

print(fibonacci(6))

def fb_recursive(n):
    if n < 2:
        return n
    else:
        return fb_recursive(n-1) + fb_recursive(n-2)

print(fb_recursive(6))
