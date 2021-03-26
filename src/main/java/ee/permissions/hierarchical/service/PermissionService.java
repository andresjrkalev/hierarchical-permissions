package ee.permissions.hierarchical.service;

import ee.permissions.hierarchical.model.Permission;

import java.util.List;

public interface PermissionService {
    List<Permission> getAll();
    Permission create(Permission permission);
}
