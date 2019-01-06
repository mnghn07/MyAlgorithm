#create pyramid of #

def pyramid(n):
    for i in range(1,n+1):
        print(" " * (n + 1 - i) + "#" * (2*i-1) + " " * (n + 1 - i))


pyramid(3)
pyramid(5)