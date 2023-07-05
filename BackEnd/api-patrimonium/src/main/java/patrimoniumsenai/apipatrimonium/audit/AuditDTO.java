package patrimoniumsenai.apipatrimonium.audit;

import jakarta.validation.constraints.NotBlank;

import java.time.LocalDate;

public record AuditDTO(
        @NotBlank
        String entity,
        @NotBlank
        String operation,
        @NotBlank
        String modifiedBy,
        @NotBlank
        LocalDate modifiedAt

) {
}
