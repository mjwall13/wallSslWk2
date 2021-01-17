puts "Please provide the student's name: "
name = gets

puts "Please provide the assignement name: "
assignment = gets

puts "Please provide the numeric grade value: "
grade = gets.to_i

if grade >= 90
    puts name+"you received an A on assignment "+assignment+". Grade Details: You met all of the requirements."
elsif grade >= 80
    puts name+"you received a B on assignment "+assignment+". Grade Details: You were missing some requirements."
elsif grade >= 70
    puts name+"you received a C on assignment "+assignment+". Grade Details: You were missing significant requirements."
elsif grade >= 60
    puts name+"you received a D on assignment "+assignment+". Grade Details: You were missing most requirements."
else
    puts name+"you failed assignment "+assignment+". Grade Details: You failed to meet minimum requirements."
end