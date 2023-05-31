package jana;
import java.util.Scanner;
public class Constover {
	private int age;
	private String name;
	private String surname;
	public Constover(int age,String name) {
	this.	age=age;
	this.	name=name;
	}
	public Constover(int age,String name,String surname) {
		this.	age=age;
		this.	name=name;
		this.  surname=surname;
	}
	public String getsurname() {
		return surname;
	}
	public int getage() {
		return age;
	}
	public String getname() {
		return name;
	}

	public static void main(String[] args) {
	Constover res=new Constover( 20,"kashi");
	System.out.println("my name is "+res.name);
	System.out.println("my age is "+res.age);
	Constover res1=new Constover( 20,"kashi","jestadi");
	System.out.println("my name is "+res1.name);
	System.out.println("my age is "+res1.age);
	System.out.println("my sur name is " +res1.surname);

	}

}
