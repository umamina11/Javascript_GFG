##Given a string s, you need to slice it so that the output is a substring that contains all the chracters except first and last. The length of the s will be greater than 2.

##Your Task: 
##The input s is provided as a parameter to the function sliceString. You need to return the sliced string. The driver code will print the output.


def sliceString(s):
    #Write your code below

    return s[1:-1]
def main():
    t=int(input())
    while(t>0):
        s=input()
        print(sliceString(s))
        t-=1
        
if _name_=="_main_":
    main()