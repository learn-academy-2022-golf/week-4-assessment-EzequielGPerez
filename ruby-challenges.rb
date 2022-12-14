# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️ Matz is nice and so we are nice !

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def num_check num
    if num % 2 == 0
        "#{num} is even"
    elsif num % 2 != 0
      "#{num} is odd"
    else
      'Something went wrong.'
    end
  end

#   p num_check num1
#   p num_check num2
#   p num_check num3

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_vowels string
    string.delete "aeiou"

end

# p no_vowels beatles_album1
# p no_vowels beatles_album2
# p no_vowels beatles_album3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def pali string
    if string.upcase == string.upcase.reverse
        "#{string} is a palindrome :)"
    elsif string != string.reverse
        "#{string} is NOT palindrome :("
    else
        'huh?!?!'
    end
end

# p pali palindrome_tester1
# p pali palindrome_tester2
# p pali palindrome_tester3

