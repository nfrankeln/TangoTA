def deaf_grandma():
    print("HEY KID!")
    count=0
    yourInput=input("say something to grandma\n")
    while count !=1:
        if yourInput == 'GOODBYE!':
            print('LEAVING SO SOON?')
            yourInput=input("say something to grandma\n")
        if yourInput == 'GOODBYE!':
            print('LATER, SKATER!')
            count=1
            break
        if yourInput=="":
            print("WHAT?")
            yourInput=input("say something to grandma\n")
        if  yourInput != yourInput.upper():
            print("SPEAK UP KID")
            yourInput=input("say something to grandma\n")
        else:
            print("NO, NOT SINCE 1946")
            yourInput=input("say something else to grandma\n")
        

deaf_grandma()
