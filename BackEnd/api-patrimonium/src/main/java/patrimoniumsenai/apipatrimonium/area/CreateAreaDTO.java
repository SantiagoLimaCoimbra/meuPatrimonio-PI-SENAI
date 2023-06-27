package patrimoniumsenai.apipatrimonium.area;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import patrimoniumsenai.apipatrimonium.employee.Employee;

public record CreateAreaDTO(

        @NotBlank
        String name_area,

        String description_area,

        @NotNull
        Employee employee) {
}
