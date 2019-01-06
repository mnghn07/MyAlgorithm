#  --- Directions
#  Given an array and chunk size, divide the array into many subarrays
#  where each subarray is of length size
#  --- Examples
#  chunk([1, 2, 3, 4], 2) - -> [[1, 2], [3, 4]]
#  chunk([1, 2, 3, 4, 5], 2) - -> [[1, 2], [3, 4], [5]]
#  chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) - -> [[1, 2, 3], [4, 5, 6], [7, 8]]
#  chunk([1, 2, 3, 4, 5], 4) - -> [[1, 2, 3, 4], [5]]
#  chunk([1, 2, 3, 4, 5], 10) - -> [[1, 2, 3, 4, 5]]

def chunk(arr,n):
    return [arr[i:i+n] for i in range(0,len(arr),n)]

print(chunk([1,2,3,4],2))
print(chunk([1,2,3,4,5],2))