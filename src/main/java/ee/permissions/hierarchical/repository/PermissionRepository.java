package ee.permissions.hierarchical.repository;

import ee.permissions.hierarchical.model.Permission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PermissionRepository extends JpaRepository<Permission, Long> {
    List<Permission> findByParentId(Long parentId);
}
