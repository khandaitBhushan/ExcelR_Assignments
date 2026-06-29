package org.example;

import java.util.List;
import java.util.Map;
import java.util.Set;

public class Student {
    private String name;
    private List<String> subjects;
    private Set<String> skills;
    private Map<String,Integer> scores;

    public void setName(String name) {
        this.name = name;
    }

    public void setSubjects(List<String> subjects) {
        this.subjects = subjects;
    }

    public void setSkills(Set<String> skills) {
        this.skills = skills;
    }

    public void setScores(Map<String, Integer> scores) {
        this.scores = scores;
    }

    public void display(){
        System.out.println(this.name);
        System.out.println(this.subjects);
        System.out.println(this.skills);
        System.out.println(this.scores);
    }
}
