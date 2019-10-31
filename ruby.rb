#You've got chickens (2 legs), cows (4 legs), and pigs (4 legs) on your farm. Return the total number of legs on your farm.

#Ex: animals(2,3,5) returns 36
#Ex: animals (1,2,3) returns 22


# def animals(chickens, cows, pigs)
#     return chickens*2+cows*4+pigs*4
# end

# print animals(2,3,5)

# Given two strings, first_name and last_name, return a single string in the format "last, first"

# Ex: concat_name("First", "Last") returns "Last, First"
# Ex: concat_name("John", "Doe") returns "Doe, John"

# def concat_name(first_name, last_name)
#     last_name = last_name + ", " 
# full_name = last_name << first_name
# return full_name
# end

# print concat_name("John", "Doe")

# Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

# Ex: less_than_or_equal_to_zero(5) returns false
# Ex: less_than_or_equal_to_zero(0) returns true

# def less_than_or_equal_to_zero(num)
# if num <= 0
#     return true
# else 
#     return false
# end
# end


# print less_than_or_equal_to_zero(0)
# print less_than_or_equal_to_zero (5)

# Create a function that accepts an array and returns the last item in the array. The array can be either homogeneous or heterogeneous. 

# get_last_item([1,2,3]) returns 3
# get_last_item (["cat", "dog", "duck"]) returns "duck"
# get_last_item([7, "string", false]) returns false

# def get_last_item(arr)
# return arr.last

# end 

# print get_last_item([1,2,3])

# Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest)

# Sort numbers array in ascending order
# If function's argument is an empty array, return an empty array
# Return a new array of sorted numbers

# Ex: sort_nums_ascending ([1,2,10,50,5]) returns [1,2,5,10,50]

# def sort_nums_ascending(arr)
# arr.sort

# end

# print sort_nums_ascending([1,2,10,50,5])

# Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

# Ex: comp("AB", "CD") return true
# EX: comp("ABD", "CE") return false

def comp(str1, str2)