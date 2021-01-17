import sys

name = raw_input("Please provide student name: ")
assignment = raw_input("Please provide the assignment name: ")
grade = raw_input("Please provide numeric grade: ")
# print(name+" "+assignment+" "+grade)

parsedGrade = float(grade)

if(parsedGrade >= 90):
    print(name+", you received an A on assignment "+assignment+". Grade Details: You met all of the requirements.")
elif(parsedGrade >= 80):
    print(name+", you received a B on assignment "+assignment+". Grade Details: You were missing some requirements.")
elif(parsedGrade >= 70):
    print(name+", you received a C on assignment "+assignment+". Grade Details: You were missing significant requirements.")
elif(parsedGrade >= 60):
    print(name+", you received a D on assignment "+assignment+". Grade Details: You were missing most requirements.")
else:
    print(name+", you failed assignment "+assignment+". Grade Details: You failed to meet minimum requirements.")




