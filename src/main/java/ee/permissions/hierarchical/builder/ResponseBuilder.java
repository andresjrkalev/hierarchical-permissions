package ee.permissions.hierarchical.builder;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class ResponseBuilder<T> {

    @JsonProperty
    private int code;

    @JsonProperty
    private T body;

    public ResponseBuilder setCode(int code) {
        this.code = code;
        return this;
    }

    public ResponseBuilder setBody(T body) {
        this.body = body;
        return this;
    }
}
