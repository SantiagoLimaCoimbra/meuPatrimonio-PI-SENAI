package patrimoniumsenai.apipatrimonium.category;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CreateCategoryDTO(
        @NotBlank
        String name,

        @NotNull
        Type type,

        String description) {
}
