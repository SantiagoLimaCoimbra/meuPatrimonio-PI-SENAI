package patrimoniumsenai.apipatrimonium.asset;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import patrimoniumsenai.apipatrimonium.area.Area;
import patrimoniumsenai.apipatrimonium.audit.AuditListener;
import patrimoniumsenai.apipatrimonium.category.Category;

@Table(name = "Asset")
@Entity(name = "Asset")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id_asset")
@EntityListeners(AuditListener.class)
public class Asset {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_asset;
    private String name_asset;
    private String account_code;
    private int amount;
    private String registration_date;

    @OneToOne
    @JoinColumn(name = "id_category")
    private Category category;

    @OneToOne
    @JoinColumn(name = "id_area")
    private Area area;

    public Asset(CreateAssetDTO data){
        this.name_asset = data.name_asset();
        this.account_code = data.account_code();
        this.amount = data.amount();
        this.registration_date = data.registration_date();
        this.category = data.category();
        this.area = data.area();
    }

    public void updateInfo(UpdateAssetDTO data){
        if (data.name_asset() != null){
            this.name_asset = data.name_asset();
        }
        if (data.account_code() != null){
            this.account_code = data.account_code();
        }
        if (data.amount() != amount){
            this.amount = data.amount();
        }
        if (data.registration_date() != null){
            this.registration_date = data.registration_date();
        }
        if (data.category() != null){
            this.category = data.category();
        }
        if (data.area() != null){
            this.area = data.area();
        }
    }

}
