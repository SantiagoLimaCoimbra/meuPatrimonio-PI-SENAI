package patrimoniumsenai.apipatrimonium.category;

import jakarta.validation.constraints.NotBlank;

public record CreateCategoryDTO(
        @NotBlank
        String name,

        @NotBlank
        String type,

        String description) {
}
