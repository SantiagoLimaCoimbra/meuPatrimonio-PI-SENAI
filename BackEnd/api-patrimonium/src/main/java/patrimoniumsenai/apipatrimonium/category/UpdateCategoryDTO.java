package patrimoniumsenai.apipatrimonium.category;

import jakarta.validation.constraints.NotNull;

public record UpdateCategoryDTO(
        @NotNull
        Long id_category,
        String name,
        Type type,
        String description) {
}
