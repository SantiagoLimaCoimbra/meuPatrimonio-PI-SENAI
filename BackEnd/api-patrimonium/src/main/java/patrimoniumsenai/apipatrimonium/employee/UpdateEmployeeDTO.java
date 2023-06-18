package patrimoniumsenai.apipatrimonium.employee;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public record UpdateEmployeeDTO(
        @NotNull
        Long id_employee,
        String name_employee,
        @Pattern(regexp = "\\d{11}")
        String cpf,

        @Email
        String email,
        Position position) {
}
