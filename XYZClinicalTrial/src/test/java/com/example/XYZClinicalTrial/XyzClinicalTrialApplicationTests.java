package com.example.XYZClinicalTrial;

import com.example.XYZClinicalTrial.models.XyzClinicalData;
import com.example.XYZClinicalTrial.services.XyzClinicalService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class XyzClinicalTrialApplicationTests {

	private XyzClinicalService service;

	@BeforeEach
	void setUp() {
		service = XyzClinicalService.getInstance();
	}

	@Test
	void contextLoads() {

	}

	@Test
	void testFetchClinicalData() {
		assertEquals(6, service.fetchClinicalData().size());
	}

	@Test
	void testCreateClinicalData() {
		service.createClinicalData("007", "Tom Wilson", 40, "male", "Flu", LocalDate.of(2023, 8, 21), "On medication");
		assertEquals(7, service.fetchClinicalData().size());
	}

	@Test
	void testUpdateClinicalData() {
		service.updateClinicalData(1, "002", "Updated Name", 33, "female", "Updated Condition", LocalDate.of(2023, 9, 1), "Updated Details");
		XyzClinicalData updatedRecord = service.fetchClinicalData().stream().filter(x -> x.getId() == 1).findFirst().orElse(null);
		assertEquals("Updated Name", updatedRecord.getName());
	}

	@Test
	void testDeleteClinicalData() {
		assertTrue(service.deleteClinicalData(1));
		assertEquals(5, service.fetchClinicalData().size());
	}
}
