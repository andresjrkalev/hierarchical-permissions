package ee.permissions.hierarchical.service;

import ee.permissions.hierarchical.model.Permission;
import ee.permissions.hierarchical.repository.PermissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static ee.permissions.hierarchical.common.Constants.COUNT_SUB_PERMISSIONS;

@Service
public class PermissionServiceImpl implements PermissionService {

    @Autowired
    PermissionRepository permissionRepository;

    @Override
    public List<Permission> getAll() {
        return permissionRepository.findAll();
    }

    @Override
    public Permission create(Permission permission) {
        List<Permission> subPermissions = permissionRepository.findByParentId(permission.getParentId());
        if (subPermissions.size() == COUNT_SUB_PERMISSIONS) return null;
        return permissionRepository.save(permission);
    }
}
