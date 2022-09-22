package com.hnt.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.hnt.entity.User;
import com.hnt.service.UserService;

@ExtendWith(MockitoExtension.class)
class UserControllerTest {
	@Mock
	UserService service;
	@InjectMocks
	UserController controller;

	@Test
	void testSaveUser1() {
		User user = new User();
		user.setId(1);
		when(service.save(user)).thenReturn(user);// mocking
		Integer savedUserId = controller.saveUser1(user);
		assertEquals(1, savedUserId);
	}

	@Test
	void testGetUser() {
		Iterable<User> user = new ArrayList<>();
		when(controller.getUser()).thenReturn(user);
		Iterable<User> iterableUserReturned = controller.getUser();
		assertEquals(iterableUserReturned, user);

	}

	@Test
	void testdelete() {
		User user = new User();
		user.setId(1);
		user.setName("john");
		service.delete(1);
		assertEquals(1, user.getId());

	}

}
