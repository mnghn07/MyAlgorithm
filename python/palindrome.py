#check if a string is palindrome or not

def palindrome(string):
    if string[::-1] == string:
        return True
    else:
        return False

print(palindrome("abccba"))
print(palindrome("abcde"))