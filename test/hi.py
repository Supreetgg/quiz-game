import random

def get_word():
    words = ['python', 'hangman', 'challenge', 'programming', 'computer']
    return random.choice(words)

def display(word, guessed):
    return ' '.join([letter if letter in guessed else '_' for letter in word])

def hangman():
    word = get_word()
    guessed = set()
    attempts = 6

    print("Welcome to Hangman!")
    while attempts > 0:
        print(f"\nWord: {display(word, guessed)}")
        guess = input("Guess a letter: ").lower()
        if not guess.isalpha() or len(guess) != 1:
            print("Please enter a single letter.")
            continue
        if guess in guessed:
            print("You already guessed that letter.")
            continue
        guessed.add(guess)
        if guess not in word:
            attempts -= 1
            print(f"Wrong! Attempts left: {attempts}")
        else:
            print("Correct!")
        if all(letter in guessed for letter in word):
            print(f"\nCongratulations! You guessed the word: {word}")
            break
    else:
        print(f"\nGame over! The word was: {word}")

if __name__ == "__main__":
    hangman()