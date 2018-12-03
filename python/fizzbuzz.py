#print out numbers from 1 to 100.
#If the number is divisble by 3, print fizz instead.
#If the number is divisible by 5, print buzz instead.
def fizzbuzz():
    for i in range(1,100):
        if i % 3 == 0:
            if i % 5 == 0:
                print("fizzbuzz")
            print("fizz")
        elif i % 5 == 0:
            print("buzz")
        else:
            print(i)
        print("\n")

print("Fizzbuzz:\n")
fizzbuzz()
