package patrimoniumsenai.apipatrimonium.category;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import patrimoniumsenai.apipatrimonium.audit.AuditListener;

@Table(name = "Category")
@Entity(name = "Category")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id_category")
@EntityListeners(AuditListener.class)
public class Category {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_category;
    private String name;
    private String description;

    @Enumerated(EnumType.STRING)
    private Type type;


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
