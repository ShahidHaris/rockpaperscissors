# rockpaperscissors

# Psedocode 
    1-get computer to randomly choose either rock, paper, or sciccors.
    2-prompt the user to choose and option.
    3-compare the user's and computer's choice to find the winner.
    4-announce the winner.

# step 1
    -declare to variables, one default and the other maximum of the generated number.
    -create a function to generate a random number. the function will generate from 0 to 8 giving 3 numbers to each option.
        0-2 = rock, 3-5 = paper, 6-8 = scissors
    check for these conditions and store the generated value.
    return the value.

# step 2
    -prompt the user to enter either of the three options.
    -make the input case insensitive.
    -store the imput in a variable.

# step 3
    -create a function that will determine the winner. these contions stands:
        -rock and paper = paper wins
        -rock and scissors = rock wins
        -paper and scissors = scissors wins
# step 4 
    -log out the result.

# miscellenous
    -create a function in order to make the user's input case insensitive.
    -this is done by looping over the input and making sure it was converted to the case wrote in the code.
    -in the playRound() function, it might be draw cases where the user's and computer's entry is thesame, in that case a recursive function of the playRound is called to make the user make another selection. 









