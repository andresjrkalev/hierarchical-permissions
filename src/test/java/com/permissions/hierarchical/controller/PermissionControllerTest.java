package com.permissions.hierarchical.controller;

import ee.permissions.hierarchical.controller.PermissionController;
import ee.permissions.hierarchical.model.Permission;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.platform.runner.JUnitPlatform;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.validation.BindingResult;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

@ExtendWith(MockitoExtension.class)
@RunWith(JUnitPlatform.class)
public class PermissionControllerTest {

    @Mock
    PermissionController permissionController;

    @Mock
    BindingResult bindingResult;

    @Test
    public void should_getAll() {
        List<Permission> permissions = permissionController.getAll();
        assertTrue(permissions.isEmpty());
    }

    @Test
    public void should_createSuccess() {
        Permission permission = new Permission();
        permission.setName("Adm");
        assertNull(permissionController.create(permission, bindingResult));
    }

    @Test
    public void should_createFail() {
        assertNull(permissionController.create(new Permission(), bindingResult));
    }
}
