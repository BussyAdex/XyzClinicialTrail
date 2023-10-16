package com.example.XYZClinicalTrial.services;

import com.example.XYZClinicalTrial.models.XyzClinicalData;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
public class XyzClinicalService {

    private List<XyzClinicalData> xyzClinicalRecords;

    private static XyzClinicalService instance = null;

    public static XyzClinicalService getInstance(){
        if (instance == null){
            instance = new XyzClinicalService();
        }
        return instance;
    }

    public XyzClinicalService(){
        xyzClinicalRecords = new ArrayList<XyzClinicalData>();
        xyzClinicalRecords.add(new XyzClinicalData("001", "John Smith", 45, "male", "Hypertension", LocalDate.of(2023, 8, 5), "On medication"));
        xyzClinicalRecords.add(new XyzClinicalData("002", "Mary Johnson", 32, "female","Diabetes", LocalDate.of(2023, 8, 16), "Last visit not present"));
        xyzClinicalRecords.add(new XyzClinicalData("003", "Robert Brown", 55, "male","Asthma", LocalDate.of(2023, 8, 18), "Next Visit is home"));
        xyzClinicalRecords.add(new XyzClinicalData("004", "Sarah Davis", 28, "female","Migraine", LocalDate.of(2023, 8, 19), "On medication"));
        xyzClinicalRecords.add(new XyzClinicalData("006", "Jane Johnson", 32, "female","Diabetes", LocalDate.of(2023, 8, 01), ""));
        xyzClinicalRecords.add(new XyzClinicalData("005", "William Clark", 50, "male","Arthritis", LocalDate.of(2023, 8, 20), "You ned more Some exercise"));
    }

    public List<XyzClinicalData> fetchClinicalData() { return xyzClinicalRecords;}

    public XyzClinicalData createClinicalData(String patientId, String name, Integer age, String gender, String condition, LocalDate recruitmentDate, String additionalDetails){
        xyzClinicalRecords.add(new XyzClinicalData(patientId, name, age, gender, condition, recruitmentDate, additionalDetails));
        return  null;
    }
    public XyzClinicalData updateClinicalData(Integer id, String patientId, String name, Integer age, String gender, String condition, LocalDate recruitmentDate, String additionalDetails){
        for (XyzClinicalData x : xyzClinicalRecords) {
            if (x.getId() == id) {
                x.setPatientId(patientId);
                x.setName(name);
                x.setAge(age);
                x.setGender(gender);
                x.setCondition(condition);
                x.setRecruitmentDate(recruitmentDate);
                x.setAdditionalDetails(additionalDetails);
            }
        }
        return  null;
    }
    public boolean deleteClinicalData(int id) {
        return xyzClinicalRecords.removeIf(x -> x.getId() == id);
    }

}
