package ee.permissions.hierarchical.controller;

import ee.permissions.hierarchical.model.Permission;
import ee.permissions.hierarchical.builder.ResponseBuilder;
import ee.permissions.hierarchical.service.PermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

import static ee.permissions.hierarchical.common.Constants.*;

@RestController
@RequestMapping(API_PATH_PERMISSION)
public class PermissionController {

    @Autowired
    PermissionService permissionService;

    @GetMapping
    public List<Permission> getAll() {
        return permissionService.getAll();
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseBuilder create(@RequestBody @Valid Permission permission, BindingResult result) {
        if (result.getErrorCount() > 0) {
            List<String> errors = new ArrayList<>();

            for (ObjectError error : result.getAllErrors()) {
                errors.add(error.getDefaultMessage());
            }
            return new ResponseBuilder<List<String>>().setCode(STATUS_CODE_NOK).setBody(errors);
        }
        Permission p = permissionService.create(permission);
        if (p == null) return new ResponseBuilder().setCode(400).setBody(ERROR_COUNT_SUB_PERMISSIONS);
        return new ResponseBuilder<Permission>().setCode(STATUS_CODE_OK).setBody(p);
    }
}
