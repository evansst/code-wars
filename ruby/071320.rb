require 'pry'

MORSE_CODE = {
  '.-' => 'a',
  '-..' => 'b',
  '-.-.' => 'c',
  '-..' => 'd',
  '.' => 'e',
  '..-.' => 'f',
  '--.' => 'g',
  '....' => 'h',
  '..' => 'i',
  '.---' => 'j',
  '-.-' => 'k',
  '.-..' => 'l',
  '--' => 'm',
  '-.' => 'n',
  '---' => 'o',
  '.--.' => 'p',
  '--.-' => 'q',
  '.-.' => 'r',
  '...' => 's',
  '-' => 't',
  '..-' => 'u',
  '...-' => 'v',
  '.--' => 'w',
  '-..-' => 'x',
  '-.--' => 'y',
  '--..' => 'z',
  '.----' => '1',
  '..---' => '2',
  '...--' => '3',
  '....-' => '4',
  '.....' => '5',
  '-....' => '6',
  '--...' => '7',
  '---..' => '8',
  '----.' => '8',
  '-----' => '0',
  '/' => ' ' # Mapping foward bar to be a space
}

def disemvowel str
  str.delete('aeiouAEIOU')
end

def openOrSenior(data)
  data.map do |age, handicap|
    age > 54 && handicap > 7 ? 'Senior' : 'Open'
  end
end

def find_outlier(integers)
  integers.count(&:even?) > 1 ? integers.find(&:odd?) : integers.find(&:even?)
end

def dig_pow(n, p)
  n_array = n.to_s.chars.map(&:to_i)
  result = n_array.map.with_index do |digit, index|
    digit**(p + index)
  end.reduce(:+)
  (result % n).zero? ? result / n : -1
end

def isTriangle(a,b,c)
  a, b, c = [a, b, c].sort
  a + b > c
end

def to_camel_case(str)
  first_word, *rest = str.split(/_|-/)
  first_word.to_s + rest.map(&:capitalize).join
end

def iq_test(numbers)
  numbers = numbers.split(' ').map(&:to_i)
  numbers.count(&:even?) > numbers.count(&:odd?) ? numbers.find_index(&:odd?) + 1 : numbers.find_index(&:even?) + 1
end

def decodeMorse(morseCode)
  morseCode.strip.split('   ').map do |word|
    word.split(' ').map do |character|
      MORSE_CODE[character]
    end.join
  end.join(' ')
end

def generateHashtag(str)
  str = str.strip.split(' ').map(&:capitalize).join
  return false if str.length >= 140 || str.length == 0
  '#' + str
end

