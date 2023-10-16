package com.example.XYZClinicalTrial.controllers;

import com.example.XYZClinicalTrial.models.XyzClinicalData;
import com.example.XYZClinicalTrial.services.XyzClinicalService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/xyzclinical")
@CrossOrigin(origins = "http://localhost:3000")
public class XyzClinicalController {

    XyzClinicalService xyzClinicalService = XyzClinicalService.getInstance();

    @GetMapping("")
    public List<XyzClinicalData> getData() {
        return xyzClinicalService.fetchClinicalData();
    }

    @PostMapping("")
    public XyzClinicalData create(@RequestBody Map<String, String> body){
        String patientId = body.get("patientId");
        String name = body.get("name");
        Integer age = Integer.parseInt(body.get("age"));
        String gender = body.get("gender");
        String condition = body.get("condition");
        LocalDate recruitmentDate = LocalDate.parse(body.get("recruitmentDate"));
        String additionalDetails = body.get("additionalDetails");
        return xyzClinicalService.createClinicalData( patientId, name, age, gender, condition, recruitmentDate, additionalDetails );

    }

    @PutMapping("/{id}")
    public XyzClinicalData update(@PathVariable String id, @RequestBody Map<String, String> body){
        Integer dataId = Integer.parseInt(id);
        String patientId = body.get("patientId");
        String name = body.get("name");
        Integer age = Integer.parseInt(body.get("age"));
        String gender = body.get("gender");
        String condition = body.get("condition");
        LocalDate recruitmentDate = LocalDate.parse(body.get("recruitmentDate"));
        String additionalDetails = body.get("additionalDetails");
        return xyzClinicalService.updateClinicalData(dataId, patientId, name, age, gender, condition, recruitmentDate, additionalDetails);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable String id){
        int dataId = Integer.parseInt(id);
        return xyzClinicalService.deleteClinicalData(dataId);
    }
}
