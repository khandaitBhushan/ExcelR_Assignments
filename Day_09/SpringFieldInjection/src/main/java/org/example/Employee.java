package org.example;

import java.util.List;

public class Employee {
    private String name;
    private Double salary;
    private List<String> projects;

    public void setName(String name) {
        this.name = name;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public void setProjects(List<String> projects) {
        this.projects = projects;
    }

    public void display(){
        System.out.println(this.name);
        System.out.println(this.salary);
        System.out.println(this.projects);
    }
}
