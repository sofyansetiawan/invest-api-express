# NodeJS Test

## Task
Create API Rest (POST) app and test the API with Node.Js .  
Prefer using HAPI.JS with TypeScript. Express.JS and JavaScript/ES6 will accepted.  

### Input Parameter:
* saving (number)
* stockValue (string) for array; use comma.
* futureValue (string) for array; use comma.

### Output:
* profit (number)


## Function Count Profit

An investor has saved some money and wants to invest in the stock market.  
There are a number of stocks to choose from, and they want to buy at most 1 share in any company.  
The total invested cannot exceed the funds available.  
A friend who is a stock market expert has predicted the values of each stock after 1 year.  
Determine the maximum profit that can be earned at the end of the year assuming the predictions come true.

### Example  
* saving = **250**  
* currentValue = 	**175,	133,	109,	210,	97**  
* futureValue = 	**200,	125,	128,	228,	133** 

To maximize profits, the investor should buy stocks at indices 2 and 4 for an investment of 109 + 97 = 206.  
At the end of the year the stocks are sold for 128 + 133 = 261, so total profit is 261 - 206 = 55.

### Function Description  
The function should return an integer that denotes the maximum profit after one year.

#### countProfit has the following parameter(s):  
* int saving: amount available for investment  
* int currentValue[n]: the current stock values  
* int futureValue[n]: the values of the stocks after one year

#### Constraints   
* 0 < n =< 100   
* 0 < saving =< 30000  
* 0 <= currentValue[i], futureValue[i] =< 300

#### Input Format For Custom Testing  
* The first line contains an integer, n, the number of elements in currentValue.  
* Each line i of the n subsequent lines (where 0 =< i < n) contains an integer, currentValue[i].  
* The next line contains an integer, n, the number of elements in futureValue.  
* Each line i of the n subsequent lines (where 0 =< i < n) contains an integer, futureValue[i].  

### Sample Case 0 
#### Sample Input for Custom Testing  
* saving = **30**  
* currentValue = **1, 2, 4, 6**  
* futureValue = **5, 3, 5, 6**  

#### Sample Output  
**6**

#### Explaination  
The investor can buy all 4 stocks and gain a profit of (5-1)+(3-2)+(5-4)+(6-6) = 4+2+1+0 = 6 

### Sample Case 1
#### Sample Input for Custom Testing  
* saving = **500**  
* currentValue = **150, 199, 200, 168, 153**  
* futureValue = **140, 175, 199, 121, 111**  

#### Sample Output   
**0**

#### Explaination  
All the stocks lose value during the year, so no investment is made.    
There is no way to make profit.

# invest-api-express
