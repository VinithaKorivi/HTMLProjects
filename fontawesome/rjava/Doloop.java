import java.util.Scanner;
class Doloop 
{
	public static void main(String[] args) 
	{
		Scanner scn=new Scanner(System.in);
		System.out.println("enter num");
		int n=scn.nextInt();
		int sum;
		do
		{
			sum=0;
		while (n>0)
		{
			sum+=n%10;
			n/=10;
		}
		System.out.print(sum);
		n=sum;
	}
	while (n>9);
	}
}
