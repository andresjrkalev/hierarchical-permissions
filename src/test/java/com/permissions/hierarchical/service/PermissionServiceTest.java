package com.permissions.hierarchical.service;

import ee.permissions.hierarchical.model.Permission;
import ee.permissions.hierarchical.service.PermissionService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.platform.runner.JUnitPlatform;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

@ExtendWith(MockitoExtension.class)
@RunWith(JUnitPlatform.class)
public class PermissionServiceTest {

    @Mock
    PermissionService permissionService;

    @Test
    public void should_getAll() {
        List<Permission> permissions = permissionService.getAll();
        assertTrue(permissions.isEmpty());
    }

    @Test
    public void should_create() {
        Permission permission = new Permission();
        permission.setName("Adm");
        assertNull(permissionService.create(permission));
    }
}
