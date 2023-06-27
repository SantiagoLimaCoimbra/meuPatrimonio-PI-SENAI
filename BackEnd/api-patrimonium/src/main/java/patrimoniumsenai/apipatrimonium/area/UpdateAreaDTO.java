package patrimoniumsenai.apipatrimonium.area;

import jakarta.validation.constraints.NotNull;
import patrimoniumsenai.apipatrimonium.employee.Employee;

public record UpdateAreaDTO(
        @NotNull
        Long id_area,
        String name_area,
        String description_area,
        Employee employee) {
}
