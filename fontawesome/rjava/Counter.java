import java.util.Scanner;
class Counter 
{
	public static void main(String[] args) 
	{
		Scanner scn=new Scanner(System.in);
		System.out.println("enter amount");
        int amt=scn.nextInt();
		if (amt>=2000)
		{
         int a=amt/2000;
		 amt=amt%2000;
		 System.out.println("2000"+"*"+a+"="+(2000*a));
		}
		if (amt>=500)
		{
			int b=amt/500;
			amt=amt%500;
			System.out.println("500"+"*"+b+"="+(500*b));
		}
		if (amt>=200)
		{ 
			int c=amt/200;
			amt=amt%200;
			System.out.println("200"+"*"+c+"="+(200*c));
		}
		if (amt>=100)
		{
			int d=amt/100;
			amt=amt%100;
			System.out.println("100"+"*"+d+"="+(100*d));
		}
	}
}
