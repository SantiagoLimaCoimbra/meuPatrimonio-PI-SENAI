package patrimoniumsenai.apipatrimonium.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import patrimoniumsenai.apipatrimonium.category.Category;
import patrimoniumsenai.apipatrimonium.category.CategoryRepository;
import patrimoniumsenai.apipatrimonium.category.CreateCategoryDTO;
import patrimoniumsenai.apipatrimonium.category.ReadCategoryDTO;
import patrimoniumsenai.apipatrimonium.category.UpdateCategoryDTO;
import java.util.List;

@RestController
@RequestMapping("categories")
public class CategoryController {

    @Autowired
    private CategoryRepository repository;

    @PostMapping
    @Transactional
    public void create(@RequestBody @Valid CreateCategoryDTO data){
        repository.save(new Category(data));
    }

    @GetMapping
    public List<ReadCategoryDTO> read(){
        return repository.findAll().stream().map(ReadCategoryDTO::new).toList();
    }

    /*
    @GetMapping("/{id_category}") //Nao funfa
    public ReadCategoryDTO edit(Long id_category){
        return repository.findAllById(id_category) ;
    }
     */

    @GetMapping("/{id_category}")
    public ResponseEntity<?> listarId(@PathVariable Long id_category){
        Category category = repository.findById(id_category).get();
        return ResponseEntity.ok(category);
    }

    @PutMapping
    @Transactional
    public void update(@RequestBody @Valid UpdateCategoryDTO data){
        var category = repository.getReferenceById(data.id_category());
        category.updateInfo(data);
    }

    @DeleteMapping("/{id_category}")
    @Transactional
    public void delet(@PathVariable Long id_category){
        repository.deleteById(id_category);
    }

}
