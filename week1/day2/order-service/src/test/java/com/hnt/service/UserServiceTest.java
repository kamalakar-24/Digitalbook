package com.hnt.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import com.hnt.UserRepository;
import com.hnt.entity.User;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {
	@InjectMocks
	UserService service;

	@Mock
	UserRepository repository;

	@Test
	void testSave() {
		User user = new User();
		user.setId(1);
		user.setName("john");
		when(repository.save(user)).thenReturn(user);// mock
		service.save(user);
		assertEquals(1, user.getId());
	}

	@Test
	void testGet() {
		Iterable<User> user = new ArrayList<>();
		when(service.getUser()).thenReturn(user);
		Iterable<User> iterableUserReturned = service.getUser();
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

//	404
	@Test
	void testSaveForException() {
		assertThrows(IllegalArgumentException.class, () -> {
			User user = new User();
			user.setName("Ram");
			service.save(user);
		});
	}

}
