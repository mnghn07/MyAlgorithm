##find a max character in a string
def maxchar(string):
    result = {}
    if not string:
        return ''
    for i in string:
        if i in result:
            result[i] += 1
        else:
            result[i] = 1
    return [x for (x,y) in result.items() if y == max(result.values())].pop()

print(maxchar("abcaabc"))
print(maxchar(""))