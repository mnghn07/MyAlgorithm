#create steps of #

def steps(n):
    for i in range(1,n+1):
        print("#" * i + " " * (n + 1 - i))

steps(3)

steps(5)
