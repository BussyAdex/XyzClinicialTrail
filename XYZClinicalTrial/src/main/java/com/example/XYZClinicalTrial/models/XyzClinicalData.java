package com.example.XYZClinicalTrial.models;
import lombok .Data;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;

@Data
@Getter
@Setter
public class XyzClinicalData {

    private static Integer counter = 0;
    private String patientId;
    private String name;
    private Integer age;
    private String gender;
    private String condition;
    private LocalDate recruitmentDate;
    private String additionalDetails;
    private Integer id;

    public XyzClinicalData() {
    }

    public XyzClinicalData(String patientId, String name, Integer age, String gender, String condition, LocalDate recruitmentDate, String additionalDetails) {
        this.id = ++counter;
        this.patientId = patientId;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.condition = condition;
        this.recruitmentDate = recruitmentDate;
        this.additionalDetails = additionalDetails;
    }

}
