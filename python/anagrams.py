#  --- Directions
#  Check to see if two provided strings are anagrams of eachother.
#  One string is an anagram of another if it uses the same characters
#  in the same quantity. Only consider characters, not spaces
#  or punctuation.  Consider capital letters to be the same as lower case
#  --- Examples
#  anagrams('rail safety', 'fairy tales') - -> True
#  anagrams('RAIL! SAFETY!', 'fairy tales') - -> True
#  anagrams('Hi there', 'Bye there') - -> False
def anagrams(string1,string2):
    result1 = {}
    result2 = {}
    string1 = ''.join(x for x in string1 if x.isalnum())
    string2 = ''.join(x for x in string2 if x.isalnum())
    for i in string1.lower():
        if i in result1:
            result1[i] += 1
        else:
            result1[i] = 1

    for i in string2.lower():
        if i in result2:
            result2[i] += 1
        else:
            result2[i] = 1
    if(sorted(result1) == sorted(result2)):
        return True
    else:
        return False


print(anagrams('rail safety', 'fairy tales'))
print(anagrams('RAIL! SAFETY!', 'fairy tales'))
print(anagrams('Hi there', 'Bye there'))

