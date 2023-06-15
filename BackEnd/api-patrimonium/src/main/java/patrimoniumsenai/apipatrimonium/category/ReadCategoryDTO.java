package patrimoniumsenai.apipatrimonium.category;

public record ReadCategoryDTO(Long id_category, String name, Type type, String description) {

    public ReadCategoryDTO(Category category){
        this(category.getId_category(), category.getName(), category.getType() , category.getDescription());
    }

}
