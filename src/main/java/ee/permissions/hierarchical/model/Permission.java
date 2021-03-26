package ee.permissions.hierarchical.model;

import org.hibernate.validator.constraints.Length;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

import static ee.permissions.hierarchical.common.Constants.VALIDATION_LENGTH_3;

@Entity
public class Permission {

    @Id
    @GeneratedValue
    private Long id;

    @NotEmpty
    @Length(min = VALIDATION_LENGTH_3, max = VALIDATION_LENGTH_3)
    private String name;
    private Long parentId;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Long getParentId() {
        return parentId;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }
}
