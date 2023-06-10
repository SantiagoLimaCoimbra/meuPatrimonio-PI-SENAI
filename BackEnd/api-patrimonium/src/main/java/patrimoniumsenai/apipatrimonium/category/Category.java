package patrimoniumsenai.apipatrimonium.category;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "Category")
@Entity(name = "Category")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id_category")
public class Category {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_category;
    private String name;
    private String type;
    private String description;

    public Category(CreateCategoryDTO data){
        this.name = data.name();
        this.type = data.type();
        this.description = data.description();
    }

    public void updateInfo(UpdateCategoryDTO data) {
        if (data.name() != null){
            this.name = data.name();
        }
        if (data.type() != null){
            this.type = data.type();
        }
        if (data.description() != null){
            this.description = data.description();
        }
    }
}
